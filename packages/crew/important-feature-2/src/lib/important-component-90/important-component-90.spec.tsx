import { render } from '@testing-library/react';

import ImportantComponent90 from './important-component-90';

describe('ImportantComponent90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent90 />);
    expect(baseElement).toBeTruthy();
  });
});
