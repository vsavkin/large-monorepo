import { render } from '@testing-library/react';

import ImportantComponent123 from './important-component-123';

describe('ImportantComponent123', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent123 />);
    expect(baseElement).toBeTruthy();
  });
});
