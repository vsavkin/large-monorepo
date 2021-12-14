import { render } from '@testing-library/react';

import ImportantComponent183 from './important-component-183';

describe('ImportantComponent183', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent183 />);
    expect(baseElement).toBeTruthy();
  });
});
