import { render } from '@testing-library/react';

import ImportantComponent187 from './important-component-187';

describe('ImportantComponent187', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent187 />);
    expect(baseElement).toBeTruthy();
  });
});
