import { render } from '@testing-library/react';

import ImportantComponent135 from './important-component-135';

describe('ImportantComponent135', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent135 />);
    expect(baseElement).toBeTruthy();
  });
});
