import { render } from '@testing-library/react';

import ImportantComponent75 from './important-component-75';

describe('ImportantComponent75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent75 />);
    expect(baseElement).toBeTruthy();
  });
});
