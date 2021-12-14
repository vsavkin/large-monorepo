import { render } from '@testing-library/react';

import ImportantComponent233 from './important-component-233';

describe('ImportantComponent233', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent233 />);
    expect(baseElement).toBeTruthy();
  });
});
