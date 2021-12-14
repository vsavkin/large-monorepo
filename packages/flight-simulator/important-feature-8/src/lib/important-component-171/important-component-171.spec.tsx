import { render } from '@testing-library/react';

import ImportantComponent171 from './important-component-171';

describe('ImportantComponent171', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent171 />);
    expect(baseElement).toBeTruthy();
  });
});
