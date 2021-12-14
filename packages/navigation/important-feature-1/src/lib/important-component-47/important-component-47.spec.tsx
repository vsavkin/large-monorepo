import { render } from '@testing-library/react';

import ImportantComponent47 from './important-component-47';

describe('ImportantComponent47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent47 />);
    expect(baseElement).toBeTruthy();
  });
});
