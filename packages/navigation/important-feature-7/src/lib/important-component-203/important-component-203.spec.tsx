import { render } from '@testing-library/react';

import ImportantComponent203 from './important-component-203';

describe('ImportantComponent203', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent203 />);
    expect(baseElement).toBeTruthy();
  });
});
