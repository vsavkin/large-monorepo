import { render } from '@testing-library/react';

import ImportantComponent240 from './important-component-240';

describe('ImportantComponent240', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent240 />);
    expect(baseElement).toBeTruthy();
  });
});
