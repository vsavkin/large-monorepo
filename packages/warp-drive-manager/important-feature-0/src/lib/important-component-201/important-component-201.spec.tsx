import { render } from '@testing-library/react';

import ImportantComponent201 from './important-component-201';

describe('ImportantComponent201', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent201 />);
    expect(baseElement).toBeTruthy();
  });
});
