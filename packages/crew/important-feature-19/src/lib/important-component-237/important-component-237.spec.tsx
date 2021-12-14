import { render } from '@testing-library/react';

import ImportantComponent237 from './important-component-237';

describe('ImportantComponent237', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent237 />);
    expect(baseElement).toBeTruthy();
  });
});
