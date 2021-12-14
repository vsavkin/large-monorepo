import { render } from '@testing-library/react';

import ImportantComponent17 from './important-component-17';

describe('ImportantComponent17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent17 />);
    expect(baseElement).toBeTruthy();
  });
});
