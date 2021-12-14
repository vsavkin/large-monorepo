import { render } from '@testing-library/react';

import ImportantComponent16 from './important-component-16';

describe('ImportantComponent16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent16 />);
    expect(baseElement).toBeTruthy();
  });
});
