import { render } from '@testing-library/react';

import ImportantComponent4 from './important-component-4';

describe('ImportantComponent4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent4 />);
    expect(baseElement).toBeTruthy();
  });
});
