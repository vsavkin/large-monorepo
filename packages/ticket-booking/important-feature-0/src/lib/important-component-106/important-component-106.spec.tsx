import { render } from '@testing-library/react';

import ImportantComponent106 from './important-component-106';

describe('ImportantComponent106', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent106 />);
    expect(baseElement).toBeTruthy();
  });
});
