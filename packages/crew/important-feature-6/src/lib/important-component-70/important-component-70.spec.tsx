import { render } from '@testing-library/react';

import ImportantComponent70 from './important-component-70';

describe('ImportantComponent70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent70 />);
    expect(baseElement).toBeTruthy();
  });
});
